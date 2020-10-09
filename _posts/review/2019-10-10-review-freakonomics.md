---
layout: post
title:  "Review: Freakonomics"
date:   2019-10-10 16:00:00 +0100
category: academic
tags: [book review, economics, Steven Levitt, Stephen Dubner, Bayes]
image: 
    path: /assets/images/freakonomics-small.jpg
    height: 192
---

# Review: Freakonomics
#### A Rogue Economist Explores the Hidden Side of Everything
##### Steven D. Levitt & Stephen J. Dubner (2015 [2006])

{% include image.html url="freakonomics.jpg" alt="Book cover" %}

_Freakonomics_ is a collection of stories about folk wisdom being overturned by exploring the data: drug dealers get rich quick; students cheat but teachers don't; your estate agent has your best interests at heart; parenting matters. Each of those notions gets a hammering. Despite having a style which is part hagiography and part smug self-satisfaction, the content of the book is amusing. While it is both unhelpful and implausible to claim that the investigations into cheating described in the first chapter originated from Levitt wondering what school teachers and sumo wrestlers had in common (p. 14), the investigations themselves appear fairly convincing.

In each instance in the book, the phenomenon of interest is investigated using linear regression, whereby patterns consistent with common interpretations of the phenomenon are demonstrated to be absent, and/or patterns consistent with some more outlandish explanation are shown to be present. It's worth reading, although more for its helpful critiques of common knowledge explanations of phenomena than because it presents iron-clad explanations of its own.

Levitt's investigation into elite sumo fight throwing was triggered partly by whistleblowing from two wrestlers, who accused certain wrestlers of being in cahoots and mentioned certain individual wrestlers as incorruptible.[^1] The sumo wrestlers were accused of throwing matches where one wrestler was safe from elimination, but a colleague was in danger of the same. Examining these 'bubble matches', Levitt showed that there were substantial deviations between these matches and equivalent matches between the wrestlers when neither was in danger of elimination. This in itself is no huge surprise - [_Thinking, Fast and Slow_]({% link _posts/review/2019-10-01-review-thinking-fast-and-slow.md %}) pointed out that golfers putt substantially better to avoid a bogey than to make a birdie[^2] without suggesting that the holes were letting the ball in deliberately - but the effects seem to disappear when looking at bouts involving the 'incorruptible' wrestlers.[^3]

This approach is repeated for the other examples: point to patterns in the data and suggest (informally) that those patterns are much more likely to be the result of cheating than to be the result of chance or other innocent causes. Whether or not you're persuaded by the argument should probably rest on how much less likely than chance the data are, although to do this we often have to have an idea of how many different patterns which we don't find would also have been persuasive.[^4] In most cases, it's worth spending a little time trying to come up with alternate explanations which would also generate the identified patterns: where schoolteachers have allegedly altered test scripts, for example, similar patterns might also be produced by students in a class being sold bogus answer keys to their multiple choice tests.

The most irritating part of the book is in the reprint of the original _New York Times_ article Dubner wrote about Levitt,[^5] at the end of which Levitt expresses a desire to "put together a set of tools that lets us catch terrorists... I have little doubt that I could figure out the answer." (p. 231). The problem with this that terrorists are awfully rare - a lot rarer than cheating sumo wrestlers or teachers. Not only are terrorists very rare, but the consequences for people being investigated (let alone tried or convicted) are huge, and this means that any screening program needs to be very, very good at distinguishing terrorists from non-terrorists. For reasons discussed brilliantly , This is very hard where the thing you're looking for (terrorism) is very rare (an explanation of why, given in terms of probabilities of having breast cancer given a positive mammogram, see [here](https://www2.stat.duke.edu/courses/Spring14/sta101.001/Sec11-2.pdf)). 

Overall, _Freakonomics_ is interesting, if somewhat lacking in depth and overbearing in style. Its examples are fun, but it is certainly more journalistic than academic (which is good for light reading and entertainment, but less good for appropriate caveats). Perhaps not one to pick up for a [solid introduction to behavioural economics]({% link _posts/review/2019-10-01-review-thinking-fast-and-slow.md %}), but skimming through might give you a few wry smiles and an illustration of what kind of questions we can ask of the large, open datasets which are becoming increasingly common.

---
## Notes

[^1]: These records frequently include a great many apparently arbitrary variables, which is why sports broadcasters can find pointlessly specific statistics to liven up broadcasts with. "This is only the second time these two teams have met in the second quarter of the season with winning records while shooting under 85% from the free-throw line..."

[^2]: Stables are essentially teams of wrestlers who live and train together, and do not fight one another in the official bouts. 

[^1]: In a grim twist to the story, the whistleblowers both died about two days after making the revelations from sudden respiratory illnesses. Some commentators attributed the deaths to the Yakuza, which purportedly controls much of the elite sumo world. 

[^2]: The effect sizes here are admittedly quite dramatically different: the difference for golfers is a few percent, while the difference for sumo wrestlers is around 30%. In the sumo case, however, we'd expect these effects to be doubled at least (because one wrestler is fighting for survival, the other for a minor improvement), and possibly exaggerated given the narrow differences between fighters at elite levels.

[^3]: It's not clear what the sample size is here; there were only 11 incorruptible wrestlers named, and bubble matches are relatively rare overall.

[^4]: The amount of time we spend worrying about all this should reflect how consequential the outcome is for us: if a thing is not worth doing, it's not worth doing right [_source unknown_]. 

[^5]: (Included in the bonus matter at the end of my copy)