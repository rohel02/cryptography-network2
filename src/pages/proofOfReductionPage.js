import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/global.css";
import Navbar from "../components/Navbar";

const proofOfReductionPage = () => {
  return (
    <div>
      <Navbar />
      <div className="book-container">
        <div className="content">
          <h1>Proof of Reduction</h1>
          <p>
            In cryptography, computational security relies on unproven assumptions since
            most schemes are not information-theoretically secure. The strategy is to
            assume the hardness of a mathematical problem or the security of a low-level
            cryptographic primitive and to prove that the construction built on it is secure
            under this assumption.
          </p>
          <p>
            A proof of security for a cryptographic construction is typically achieved
            through a reduction. This method explicitly shows how any efficient adversary <code>A</code> 
            that can break the cryptographic scheme <code>Π</code> can be transformed into an
            efficient algorithm <code>A′</code> that solves the underlying hard problem <code>X</code>. 
          </p>
          <h2>Steps for a Proof by Reduction</h2>
          <ol>
            <li>
              Fix some efficient (i.e., probabilistic polynomial-time) adversary <code>A</code>
              attacking <code>Π</code>. Denote this adversary’s success probability by <code>ϵ(n)</code>.
            </li>
            <li>
              Construct an efficient algorithm <code>A′</code> that attempts to solve problem <code>X</code> 
              by using adversary <code>A</code> as a subroutine. An important point here is that <code>A′</code> 
              knows nothing about how <code>A</code> works; the only thing <code>A′</code> knows is that <code>A</code> 
              is expecting to attack <code>Π</code>. So, given some input instance <code>x</code> of problem <code>X</code>, 
              our algorithm <code>A′</code> will simulate for <code>A</code> an instance of <code>Π</code> such that:
              <ul>
                <li>
                  As far as <code>A</code> can tell, it is interacting with <code>Π</code>. That is, the view of <code>A</code>
                  when run as a subroutine by <code>A′</code> should be distributed identically to (or at least close to) 
                  the view of <code>A</code> when it interacts with <code>Π</code>.
                </li>
                <li>
                  When <code>A</code> succeeds in breaking the instance of <code>Π</code> that is being
                  simulated by <code>A′</code>, this should allow <code>A′</code> to solve the instance <code>x</code> it was
                  given, at least with inverse polynomial probability <code>1/p(n)</code>. In other
                  words, we attempt to reduce the problem of solving <code>X</code> to the
                  problem of breaking <code>Π</code>.
                </li>
              </ul>
            </li>
            <li>
              Taken together, the above imply that <code>A′</code> solves <code>X</code> with probability
              <code>ϵ(n)/p(n)</code>. Now, if <code>ϵ(n)</code> is not negligible, then neither is <code>ϵ(n)/p(n)</code>.
              Moreover, if <code>A′</code> is efficient, we obtain an efficient algorithm <code>A′</code> solving <code>X</code>
              with non-negligible probability, contradicting our initial assumption.
            </li>
            <li>
              Given our assumption regarding <code>X</code>, we conclude that no efficient
              adversary <code>A</code> can succeed in breaking <code>Π</code> with non-negligible probability.
              Stated differently, <code>Π</code> is computationally secure.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Proof of Reduction" />;

export default proofOfReductionPage;
