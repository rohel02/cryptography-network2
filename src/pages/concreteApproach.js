import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/global.css";
import Navbar from "../components/Navbar";

const concreteApproachPage = () => {
  return (
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <h1>The Concrete Approach</h1>
          <p>
            The concrete approach to computational security provides a practical
            framework for evaluating the robustness of cryptographic schemes by
            quantifying their resilience against adversaries within specific computational
            limits. This approach explicitly defines the maximum success probability of an
            attacker operating within a fixed time frame or computational budget, offering
            tangible guarantees for the security of cryptographic systems.
          </p>
          <h2>Definition</h2>
          <p>
            A scheme is (t)-secure if any adversary running for time at most t succeeds in
            breaking the scheme with probability at most a predefined threshold.
          </p>
          <h2>Example</h2>
          <ul>
            <li>
              A scheme might guarantee that no attacker using the fastest
              supercomputer for 200 years can break it with a probability exceeding
              2<sup>−60</sup>.
            </li>
          </ul>
          <h2>Limitations</h2>
          <p>
            The concrete approach is particularly valuable because it directly addresses user
            concerns by providing measurable security assurances. However, its practical
            implementation presents several challenges:
          </p>
          <ol>
            <li>
              <strong>Dependency on Assumptions:</strong> Security claims often depend on
              assumptions about the attacker’s computational resources, such as the use of
              desktop PCs, supercomputers, or extensive computer networks. These
              guarantees may also fail to consider future advancements in computing power,
              which could significantly reduce the time required to break a scheme. For
              instance, Moore’s Law suggests that computational power roughly doubles
              every 18 months.
            </li>
            <li>
              <strong>Specific Conditions:</strong> Concrete security claims are typically limited
              to specific conditions. For example, a guarantee against adversaries running
              for five years does not necessarily account for attackers running for shorter
              or longer durations. Moreover, assumptions about the attack methods (e.g.,
              off-the-shelf algorithms vs. dedicated hardware) can affect the validity of the
              claims.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="The Concrete Approach" />;

export default concreteApproachPage;
