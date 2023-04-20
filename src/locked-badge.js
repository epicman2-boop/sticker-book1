import { LitElement, html, css } from "lit";

class LockedBadge extends LitElement {
  static get properties() {
    return {
      locked: { type: Boolean },
    };
  }

  static styles = css`
    .circle {
      position: relative;
      padding: 20px;
      margin: 20px;
      color: #fff;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #aa3030;
      border-radius: 50%;
      width: 400px;
      height: 400px;
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
    }

    simple-icon {
      --simple-icon-width: 200px;
      --simple-icon-height: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  `;

  constructor() {
    super();
    this.locked = true;
  }

  render() {
    return html`
      <div class="circle">
        <simple-icon icon="icons:lock" ?hidden="${this.locked}"></simple-icon>
      </div>
    `;
  }

}

customElements.define("locked-badge", LockedBadge);
