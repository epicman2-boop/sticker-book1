import { LitElement, html, css } from "lit";

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
    .circle {
      width: 200px;
      height: 200px;
      background: red;
      border-radius: 50%;
    }
    .badge {
      position: relative;
      width: 400px;
      border-radius: 50%;
      transform: rotate(-50deg);
    }
    h1 span {
      font: 26px Monaco, MonoSpace;
      height: 200px;
      position: absolute;
      width: 20px;
      left: 0;
      top: 0;
      transform-origin: bottom center;
    }
    
  `;

//position first, warp later

  constructor() {
    super();
    this.title = "Title";
    this.date = "Date";
  }

  render() {
    return html`
      <div class="circle">
        <div id="page-wrap">
          <div class="badge">
            <h1>${this.title}</h1>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("badge-sticker", BadgeSticker);
