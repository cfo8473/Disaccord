
import React from 'react'
import {Link} from 'react-router-dom'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Blob from './login_blob.js'

export default class SessionForm extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = this.props.userInfo;
                   this.handleSubmit = this.handleSubmit.bind(this);
                 }

                 update(field) {
                   return e => {
                     this.setState({ [field]: e.target.value });
                   };
                 }
                 handleSubmit(e) {
                   e.preventDefault();
                   const user = Object.assign({}, this.state);
                   this.props.processForm(user);
                 }

                 componentDidMount() {
                   this.blob();
                 }

                 componentWillUnmount() {
                   this.props.clearErrors();
                 }

                 blob() {
                   const HALF_PI = Math.PI / 2;
                   const canvas = document.getElementById("canvas-blob");
                   const blobCanvas = canvas.getContext("2d");

                   canvas.width = window.innerWidth;
                   canvas.height = window.innerHeight;

                   class Blob {
                     constructor() {
                       this.radius = 500;
                       this.segments = 12;
                       this.step = HALF_PI / this.segments;
                       this.anchors = [];
                       this.radii = [];
                       this.thetaOff = [];

                       const bumpRadius = 100;
                       const halfBumpRadius = bumpRadius / 2;

                       for (let i = 0; i < this.segments + 2; i++) {
                         this.anchors.push(0, 0);
                         this.radii.push(
                           Math.random() * bumpRadius - halfBumpRadius
                         );
                         this.thetaOff.push(Math.random() * 2 * Math.PI);
                       }

                       this.theta = 0;
                       this.thetaRamp = 0;
                       this.thetaRampDest = 12;
                       this.rampDamp = 25;
                     }

                     login() {
                       this.radius += 4000;
                     }

                     update() {
                       this.thetaRamp +=
                         (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
                       this.theta += 0.03;

                       this.anchors = [0, this.radius];
                       for (let i = 0; i <= this.segments + 2; i++) {
                         const sine = Math.sin(
                           this.thetaOff[i] + this.theta + this.thetaRamp
                         );
                         const rad = this.radius + this.radii[i] * sine;
                         const x = rad * Math.sin(this.step * i);
                         const y = rad * Math.cos(this.step * i);
                         this.anchors.push(x, y);
                       }

                       blobCanvas.save();

                       blobCanvas.translate(-10, -10);
                       blobCanvas.scale(1.6, 1.6);
                       blobCanvas.fillStyle = "rgb(47, 49, 54, 0.9)";
                       // let pat = blobCanvas.createPattern(blobBg, "no-repeat");
                       // blobCanvas.fillStyle = pat;
                       blobCanvas.beginPath();
                       blobCanvas.moveTo(0, 0);
                       mathFunction(this.anchors, false);

                       blobCanvas.lineTo(0, 0);
                       blobCanvas.fill();
                       blobCanvas.restore();
                     }
                   }

                   const blob = new Blob();

                   const blobBg = new Image();
                   blobBg.src =
                     "https://discordapp.com/assets/8eba753f8b6d02be1013c5e659b0fc2f.png";

                   function loop() {
                     canvas.width = window.innerWidth;
                     canvas.height = window.innerHeight;

                     blobCanvas.clearRect(0, 0, canvas.width, canvas.height);

                     blob.update();

                     window.requestAnimationFrame(loop);
                   }

                   loop();

                   function mathFunction(bezier, closed = true) {
                     const averages = calcAvg(bezier);
                     const bLength = bezier.length;

                     if (closed) {
                       blobCanvas.moveTo(averages[0], averages[1]);
                       for (let i = 2; i < bLength; i += 2) {
                         let n = i + 1;
                         blobCanvas.quadraticCurveTo(
                           bezier[i],
                           bezier[n],
                           averages[i],
                           averages[n]
                         );
                       }
                       blobCanvas.quadraticCurveTo(
                         bezier[0],
                         bezier[1],
                         averages[0],
                         averages[1]
                       );
                     } else {
                       blobCanvas.moveTo(bezier[0], bezier[1]);
                       blobCanvas.lineTo(averages[0], averages[1]);
                       for (let i = 2; i < bLength - 2; i += 2) {
                         let n = i + 1;
                         blobCanvas.quadraticCurveTo(
                           bezier[i],
                           bezier[n],
                           averages[i],
                           averages[n]
                         );
                       }
                       blobCanvas.lineTo(
                         bezier[bLength - 2],
                         bezier[bLength - 1]
                       );
                     }
                   }

                   function calcAvg(p) {
                     const averages = [];
                     const bLength = p.length;
                     let prev;

                     for (let i = 2; i < bLength; i++) {
                       prev = i - 2;
                       averages.push((p[prev] + p[i]) / 2);
                     }

                     averages.push(
                       (p[0] + p[bLength - 2]) / 2,
                       (p[1] + p[bLength - 1]) / 2
                     );
                     return averages;
                   }
                 }

                 emailSignup() {
                   if (this.props.formType === "signup")
                     return (
                       <div>
                         <label>
                           <h5 className="login-text">Email </h5>
                           <input
                             className="session-input"
                             type="text"
                             value={this.state.email}
                             onChange={this.update("email")}
                           />
                         </label>
                       </div>
                     );
                 }

                 formSpacers() {
                   if (this.props.formType === "login") {
                     return (
                       <div className="login-spacer">
                         <br></br>
                       </div>
                     );
                   }
                 }

                 formSwapGreeting() {
                   if (this.props.formType === "login") {
                     return (
                       <div>
                         <div className="login-welcome">Welcome back!</div>
                         <div className="login-subtitle">
                           We're so excited to see you again!
                         </div>
                       </div>
                     );
                   } else {
                     return (
                       <div className="login-welcome">Create an account</div>
                     );
                   }
                 }

                 formSwap() {
                   if (this.props.formType === "login") {
                     return (
                       <span className="form-prompt-text">
                         Need an account? <Link to={"/signup"}>Register</Link>
                       </span>
                     );
                   } else {
                     return (
                       <span className="form-prompt-text">
                         <Link to={"/login"}>Already have an account?</Link>
                       </span>
                     );
                   }
                 }

                 render() {
                   const buttonText =
                     this.props.formType === "login" ? "Login" : "Continue";

                   return (
                     <div className="sessionFormDiv">
                       <canvas
                         id="canvas-blob"
                         className="canvas-blob-container"
                         width="1111"
                         height="444"
                       />

                       <div className="session-logo">
                         <FontAwesomeIcon icon={faDog} /> disaccord
                       </div>
                       <div className="vertical-spacer">
                         {this.formSpacers()}
                       </div>
                       <div className="sessionForm" id="session-form-id">
                         <button
                           className="guest-button"
                           type="submit"
                           onClick={this.props.guestLogin}
                         >
                           Demo Login
                         </button>
                         <form onSubmit={this.handleSubmit}>
                           {this.formSwapGreeting()}
                           {this.props.errors &&
                             this.props.errors.map((ele, idx) => {
                               return (
                                 <li className="errors" key={`error-${idx}`}>
                                   {ele}
                                 </li>
                               );
                             })}

                           <h5 className="login-text">Username </h5>
                           <input
                             className="session-input"
                             type="text"
                             value={this.state.username}
                             onChange={this.update("username")}
                           />

                           <h5 className="login-text">Password </h5>
                           <input
                             className="session-input"
                             type="password"
                             value={this.state.password}
                             onChange={this.update("password")}
                           />

                           {this.emailSignup()}

                           <input
                             className="submit-button"
                             type="submit"
                             value={buttonText}
                           />
                           {this.formSwap()}
                         </form>
                       </div>
                     </div>
                   );
                 }
               }

