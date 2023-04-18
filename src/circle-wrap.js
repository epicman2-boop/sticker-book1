import { LitElement, html, css } from "lit";

class CircleWrap extends LitElement {
  static get tag() {
    return "circle-wrap";
  }

  static get properties() {
    return {
      text: { type: String },
      radius: { type: Number },
      fontSize: { type: Number },
    };
  }

  constructor() {
    super();
    this.text = "Hello, world!";
    this.radius = 100;
    this.fontSize = 15;
    this._canvas = null;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
      }
      canvas {
        position: absolute;
        top: 0;
        left: 0;
      }
    `;
  }

  firstUpdated() {
    this._canvas = this.shadowRoot.querySelector("canvas");
    this._canvas.width = this.radius * 2;
    this._canvas.height = this.radius * 2;
    this._drawTextCircle();
  }

  updated(changedProps) {
    if (
      changedProps.has("text") ||
      changedProps.has("radius") ||
      changedProps.has("fontSize")
    ) {
      this._drawTextCircle();
    }
  }

  _drawTextCircle() {
    const ctx = this._canvas.getContext("2d");
    const centerX = this.radius;
    const centerY = this.radius;
    const text = this.text;
    const radius = this.radius;

    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.font = `${this.fontSize}px Monaco, MonoSpace`;
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      const angle = i * ((2 * Math.PI) / text.length);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.fillText(char, 0, -radius);
      ctx.restore();
    }
  }

  render() {
    return html` <canvas></canvas> `;
  }
}
customElements.define(CircleWrap.tag, CircleWrap);
