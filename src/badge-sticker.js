import { LitElement, html, css } from "lit";
import "../src/circle-wrap.js";

class BadgeSticker extends LitElement {
  static properties = {
    unlocked: { type: Boolean },
    logo: { type: String },
    detailsIcon: { type: String },
    verificationLink: { type: String },
    skills: { type: Array },
    criteriaName: { type: String },
  };

  static styles = css`
    .circle {
      position: relative;
      padding: 20px;
      margin: 20px;
      background: #ff0030;
      color: #fff;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      border-radius: 50%;
      width: 400px;
      height: 400px;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
    }
    
    circle-wrap {
      position: absolute;
      top: 50%;
      left: -7%;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="circle">
        <circle-wrap title="Merit Badge" date="2020-01-01"></circle-wrap>
      </div>
    `;
  }
}

customElements.define("badge-sticker", BadgeSticker);
