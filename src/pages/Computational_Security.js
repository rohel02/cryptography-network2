import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/global.css";
import Navbar from "../components/Navbar";

const nodesPage = () => {
  return (
    
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <h1>Computational Security</h1>
          <p>
            The concept of perfect secrecy represents an ideal in cryptography, ensuring
            that no information about an encrypted message is ever leaked, even if an
            attacker has unlimited computational power. While this is theoretically
            appealing, it is unnecessarily strong and impractical for real-world
            applications.
          </p>
          <p>
            Instead, cryptographic security is commonly defined using the notion of
            computational security, which allows for minimal and practically negligible
            risks. For instance, an encryption scheme may be considered secure if the
            probability of an attacker successfully decrypting a message is infinitely small,
            even after decades of computational effort on advanced systems.
          </p>
          <h2>Differences Between Perfect and Computational Security</h2>
          <ul>
            <li>
              <strong>Limited Adversary Resources:</strong> Security is guaranteed only against
              attackers with feasible computational resources and time limits. Given
              unlimited resources, any system could potentially be compromised, but
              computational security ensures this scenario is practically unattainable.
            </li>
            <li>
              <strong>Minimal Probability of Failure:</strong> There is a small, non-zero chance of an
              attacker succeeding. By ensuring this probability is negligible, the risk
              remains acceptable in practical applications.
            </li>
          </ul>
          <p>
            Despite these relaxations, computational security maintains a rigorous mathematical framework.
            Definitions and proofs remain essential to establish and evaluate the strength of encryption schemes.
          </p>
          <h2>Approaches to Computational Security</h2>
          <ul>
            <li>Concrete Approach</li>
            <li>Asymptotic Approach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Computational Secrecy" />;

export default nodesPage;
