import { LitElement, html, css } from "lit";
import "../src/circle-wrap.js";

class BadgeSticker extends LitElement {
  static properties = {
    unlocked: { type: Boolean },
    date: { type: String },
    logo: { type: String },
    title: { type: String },
    detailsIcon: { type: String },
    verificationLink: { type: String },
    skills: { type: Array },
    criteriaName: { type: String },
  };

  static styles = css`
    .text {
      font: 26px Monaco, MonoSpace;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      margin: 0;
      padding: 0;
      text-align: center;
      transform-origin: bottom center;
      transform: rotate(10deg);
    }
    .page-wrap {
      position: relative;
    }
    .circle {
      padding: 20px;
      margin: 10px;
      background: #ff0030;
      color: #fff;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
    }
  `;


  constructor() {
    super();
    this.title = "Title";
    this.date = "Date";
  }

  render() {
    return html`
      <div class="circle">
        <circle-wrap>
        </circle-wrap>
      </div>
    `;
  }
}

customElements.define("badge-sticker", BadgeSticker);
