import React from "react";

export function ParadoxDetails() {
  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        Resolution of the Paradox
      </div>
      <div className="collapse-content">
        <p className="flex flex-col space-y-4">
          <span>
            Imagine a race between Achilles and a slow-moving tortoise. To give the tortoise a head start, it begins a certain distance ahead of Achilles. Zeno argues that Achilles will never catch the tortoise because, by the time Achilles reaches the point where the tortoise started, the tortoise has moved a little farther ahead. When Achilles reaches that new point, the tortoise has again moved slightly forward, and so on.
          </span>

          <span>
            The paradox continues with an infinite sequence of events: each time Achilles reaches the spot where the tortoise was, the tortoise has moved just a little farther. Since there are infinitely many points Achilles must reach (each one where the tortoise was a moment before), Zeno argued that Achilles can never actually reach the tortoise, and therefore, motion itself is an illusion.
          </span>

          <span>
            Resolving the Paradox: In modern terms, we can resolve this paradox using calculus. We understand that the infinite sequence of smaller and smaller distances that Achilles must cover does indeed have a finite sum. Achilles does reach the tortoise in a finite amount of time because the distances get smaller at such a rate that they add up to a finite number. This demonstrates that, while the process involves infinitely many steps, the total distance covered converges to a specific value, allowing Achilles to catch the tortoise.
          </span>
  
          <span>
            So, while Zeno's paradox highlights interesting questions about infinity and division, mathematics shows that motion and convergence are possible, even when dealing with infinite sequences.
          </span>
          
          <a className="text-blue-700" href="https://en.wikipedia.org/wiki/Zeno%27s_paradoxes#:~:text=In%20this%20paradox%2C%20Zeno%20argues,steps%20to%20catch%20the%20tortoise">
            See more details
          </a>
        </p>
      </div>
    </div>
  )
}