import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/global.css";
import Navbar from "../components/Navbar";

const pseudorandomGeneratorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <h1>Pseudorandom Generator (PRG)</h1>
          <p>
            To understand EAV-Security, it is necessary to introduce the concept of
            pseudorandom generators (PRGs), which are fundamental components in
            private-key encryption.
          </p>
          <p>
            A pseudorandom generator <code>G</code> is an efficient, deterministic algorithm for
            transforming a short, uniform string (called a seed) into a longer, uniform-looking
            (or pseudorandom) output string.
          </p>
          <p>
            The PRG is beneficial when a large number of random (or random-looking)
            bits are required, as generating true random bits is often challenging and
            time-consuming.
          </p>
          <p>
            A pseudorandom generator (PRG) should pass all efficient statistical tests,
            meaning that for any efficient distinguisher <code>D</code>, the probability that <code>D</code> outputs
            <code>1</code> when given the output of the PRG should be close to the probability that <code>D</code>
            outputs <code>1</code> when given a uniform string of the same length. This ensures that
            the PRG’s output appears uniformly random to any efficient observer.
          </p>
          <p>
            A distribution <code>Dist</code> on <code>n</code>-bit strings is considered pseudorandom if the process
            of sampling a string from <code>Dist</code> is indistinguishable from sampling a uniform
            <code>n</code>-bit string. Specifically, it should be infeasible for any polynomial-time
            algorithm to distinguish between a string sampled from <code>Dist</code> and a uniformly
            random string. Pseudorandomness is a property of distributions, not individual
            strings, and is defined as a computational relaxation of true randomness.
          </p>
          <p>
            If <code>G</code> is an efficiently computable function that maps <code>n</code>-bit strings to outputs
            longer than <code>n</code>, and <code>Dist<sub>n</sub></code> is the distribution obtained by choosing a uniform
            seed <code>s</code> of length <code>n</code> and outputting <code>G(s)</code>, then <code>G</code> is a pseudorandom generator if
            and only if <code>Dist<sub>n</sub></code> is pseudorandom.
          </p>
          <h2>Definition</h2>
          <p>
            Let <code>G</code> be a deterministic polynomial-time algorithm such that for any <code>n</code> and
            any input <code>s ∈ &#123;0, 1&#125;<sup>n</sup></code>, the result <code>G(s)</code> is a string of length <code>ℓ(n)</code>. 
            <code>G</code> is a pseudorandom generator if the following conditions hold:
          </p>
          <ol>
            <li>
              <strong>Expansion:</strong> For every <code>n</code>, it holds that <code>ℓ(n) &gt; n</code>.
            </li>
            <li>
              <strong>Pseudorandomness:</strong> For any probabilistic polynomial-time (PPT)
              algorithm <code>D</code>, there is a negligible function <code>negl(n)</code> such that:
              <blockquote>
                <code>
                  Pr[D(G(s)) = 1] − Pr[D(r) = 1] ≤ negl(n),
                </code>
              </blockquote>
              <p>
                where the first probability is taken over the uniform choice of <code>s ∈ &#123;0, 1&#125;<sup>n</sup></code>
                and the randomness of <code>D</code>, and the second probability is taken over the
                uniform choice of <code>r ∈ &#123;0, 1&#125;<sup>ℓ(n)</sup></code> and the randomness of <code>D</code>.
              </p>
            </li>
          </ol>
          <p>
            <code>ℓ(n)</code> is the expansion factor of <code>G</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Pseudorandom Generator (PRG)" />;

export default pseudorandomGeneratorPage;
