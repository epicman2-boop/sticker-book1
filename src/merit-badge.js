import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "../src/badge-sticker.js";

class MeritBadge extends LitElement {
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
    #badge {
      width: 100px;
      height: 100px;
      background: blue;
      border-radius: 50%;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <badge-sticker id="badge">
        <simple-icon-button
          icon="cancel"
          @click="${this.skillClick}"
        ></simple-icon-button>
      </badge-sticker>

      <absolute-position-behavior
        justify
        position="bottom"
        allow-overlap
        sticky
        auto
        .target="${this.activeNode}"
        ?hidden="${!this.skillsOpened}"
      >
      </absolute-position-behavior>
    `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#badge");
  }

  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }
}

customElements.define("merit-badge", MeritBadge);
