import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/global.css";
import Navbar from "../components/Navbar";

const indistinguishabilityPage = () => {
  return (
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <h1>Indistinguishability</h1>
          <h2>Perfect Indistinguishability</h2>
          <p>
            Perfect indistinguishability is an equivalent definition of perfect secrecy that
            focuses on an adversary’s inability to distinguish between two chosen messages
            based on their ciphertexts.
          </p>
          <h3>Adversarial Experiment</h3>
          <ol>
            <li>
              The adversary chooses two messages <code>m<sub>0</sub></code> and <code>m<sub>1</sub></code> from the message space <code>M</code>.
            </li>
            <li>
              A key <code>k</code> is generated using the key generation algorithm <code>Gen</code>, and a random bit <code>b ∈ &#123;0, 1&#125;</code> is selected.
            </li>
            <li>
              The message <code>m<sub>b</sub></code> is encrypted to produce a challenge ciphertext <code>c</code>, which is given to the adversary.
            </li>
            <li>
              The adversary guesses <code>b</code>, trying to determine which message was encrypted.
            </li>
          </ol>
          <p>
            The scheme is perfectly indistinguishable if no adversary, regardless of
            computational power, can succeed with a probability greater than <code>1/2</code>, which
            represents a random guess.
          </p>
          <h3>Formal Definition</h3>
          <p>
            An encryption scheme <code>(Gen, Enc, Dec)</code> with message space <code>M</code> is perfectly
            indistinguishable if, for every adversary <code>A</code>:
          </p>
          <blockquote>
            <code>Pr[PrivKeav<sub>A</sub> = 1] = 1/2</code>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Indistinguishability" />;

export default indistinguishabilityPage;
