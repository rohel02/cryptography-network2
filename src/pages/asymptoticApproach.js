import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/global.css";
import Navbar from "../components/Navbar";

const asymptoticApproachPage = () => {
  return (
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <h1>The Asymptotic Approach</h1>
          <p>
            Due to the limitations of the concrete approach, such as difficulties in providing precise guarantees and accounting for evolving computational capabilities, the asymptotic approach offers a more flexible and theoretical framework for analyzing cryptographic security.
          </p>
          <p>
            Rooted in complexity theory, this approach uses a security parameter (n), which acts as a central variable that both defines the cryptographic scheme itself and influences the resources available to all parties involved, including attackers.
          </p>
          <h2>Security Parameter</h2>
          <ul>
            <li>
              <strong>The security parameter n</strong> is an integer value that typically represents the size of the cryptographic key. In practical terms, this value correlates to the amount of resources or effort required to break the scheme.
            </li>
            <li>
              For example, a larger n implies a stronger cryptographic system, as the effort to break the system increases as the size of the security parameter increases.
            </li>
          </ul>
          <h2>Polynomial</h2>
          <p>
            A function <code>f</code> from the natural numbers to the non-negative real numbers is polynomial if there exists a constant <code>c</code> such that:
          </p>
          <blockquote>
            <code>f(n) &lt; n<sup>c</sup> for all n.</code>
          </blockquote>
          <p>
            An algorithm <code>A</code> runs in polynomial time if there exists a polynomial <code>p</code> such that, for every input <code>x</code>, the computation of <code>A(x)</code> terminates within at most <code>p(|x|)</code> steps, where <code>|x|</code> denotes the length of the input <code>x</code>.
          </p>
          <ul>
            <li>
              In the asymptotic approach, adversaries are modeled as probabilistic algorithms that run in polynomial time relative to the security parameter <code>n</code>.
            </li>
            <li>
              A polynomial function <code>p(n)</code> describes the maximum amount of time or resources an adversary can use to attack the system.
            </li>
          </ul>
          <h2>Negligible Probability of Success</h2>
          <p>
            A negligible function is one that is asymptotically smaller than any inverse polynomial function. Formally:
          </p>
          <blockquote>
            A function <code>f</code> is negligible if, for every polynomial <code>p</code>, there exists an <code>N</code> such that for all <code>n &gt; N</code>, it holds that:
          </blockquote>
          <blockquote>
            <code>f(n) &lt; 1/p(n).</code>
          </blockquote>
          <p>
            In simpler terms, this ensures that the chance of an adversary succeeding is so small that, for practical purposes, it can be ignored.
          </p>
          <h2>Security Definition in the Asymptotic Model</h2>
          <p>
            A cryptographic scheme is considered secure in the asymptotic approach if any probabilistic polynomial-time (PPT) adversary has a negligible probability of successfully breaking the scheme. As <code>n</code> grows, the likelihood of an adversary succeeding diminishes significantly, ensuring long-term security.
          </p>
          <p>
            This perspective makes the asymptotic approach valuable for understanding the scalability of cryptographic systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="The Asymptotic Approach" />;

export default asymptoticApproachPage;
