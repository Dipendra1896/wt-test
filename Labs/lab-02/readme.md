# Lab-2

# OBJECTIVE: FLOW LAYOUT AND POSITIONED LAYOUT IN CSS
# THEORY:
## Flow layout : 
Normal Flow, or Flow Layout, is the way that Block and Inline elements are displayed on a page before any changes are made to their layout. In normal flow, inline elements display in the inline direction, that is in the direction words are displayed in a sentence according to the Writing Mode of the document. Block elements display one after the other, as paragraphs do in the Writing Mode of that document.

## Positioned Layout:
A positioned element is an element whose computed <code>position</code> value is either <code>relative</code>, <code>absolute</code>, <code>normal</code>, or <code>sticky</code>. (In other words, it's anything except static.)
A relatively positioned element is an element whose computed <code>position</code> value is <code>relative</code>. The <code>top</code> and <code>bottom</code> properties specify the vertical offset from its normal position; the <code>left</code> and <code>right</code> properties specify the horizontal offset.
An absolutely positioned element is an element whose computed position value is <code>absolute</code> or <code.fixed</code>. The <code>left</code><code>right</code><code>top</code> <code>bottom</code>  properties specify offsets from the edges of the element's containing block. (The containing block is the ancestor relative to which the element is positioned.) If the element has margins, they are added to the offset. The element establishes a new block formatting context (BFC) for its contents.
A stickily positioned element is an element whose computed <code>position</code> value is<code> sticky</code>. It's treated as relatively positioned until its containing block crosses a specified threshold (such as setting <code>top</code> to value other than auto) within its flow root (or the container it scrolls within), at which point it is treated as "stuck" until meeting the opposite edge of its containing block.

# CODES:

# CONCLUSION:
In this way we can manage the layout in webpage.



