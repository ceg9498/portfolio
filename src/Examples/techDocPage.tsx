import React from 'react'
import './techDocPage.scss'

export default function TechDocPage(){
  return(
    <div id="tdp-root">
      <nav id="tdp-navbar">
      <input type="checkbox" id="menu" /><label htmlFor="menu"><header id="tdp-header">
        Nifty CSS Tricks
      </header></label>
      <a href="#Box_Sizing" className="nav-link">Box Sizing</a>
      <a href="#Gradient_Borders" className="nav-link">Gradient Borders</a>
      <a href="#Outline" className="nav-link">Outline</a>
      <a href="#Table_Borders" className="nav-link">Table Borders</a>
      <a href="#Nth_Child" className="nav-link">Nth Child</a>
      <a href="#Combinators" className="nav-link">Combinators</a>
      </nav>

      <main id="tdp-main-doc">
      <section className="tdp-section main-section" id="Box_Sizing">
        <header>Box Sizing</header>
        <article className="tdp-article">
        <p>Box Sizing is, by default, based on the content of a container, <i>plus</i> its padding and border sizes. This means that when you set the width and height of a container, the padding and border sizes get added to those values to determine how big the container is. However, this can easily be changed to work the other way. The <code>box-sizing</code> property allows us to set a box's size to include the padding and the border - the width and height specified in the CSS is the width and height displayed.</p>
        <code className="block">box-sizing: border-box;</code>
        <p><a href="https://www.w3schools.com/cssref/css3_pr_box-sizing.asp">w3schools</a></p>
        </article>
      </section>
      <section className="tdp-section main-section" id="Gradient_Borders">
        <header>Gradient Borders</header>
        <article className="tdp-article">
        <p>These (simple) gradient borders aren't really borders, but <i>simulated</i> borders. It's actually a background, drawn thin, and placed on the edge of a container. Multiple can be drawn for different colors and placements.</p>
        <code className="block">
          background: <br/>
          &nbsp;&nbsp;linear-gradient(to right, blue, yellow) <br/>
          &nbsp;&nbsp;&nbsp;bottom/ <br/>
          &nbsp;&nbsp;&nbsp;50% 2px no-repeat, <br/>
          &nbsp;&nbsp;white;
        </code>
        <p>Here's an explination of what's happening.</p>
        <ol>
          <li>First, we use the property <code>background</code> rather than <code>background-color</code> or <code>background-image</code>.</li>
          <li>Next, insert a gradient that specifies the direction wanted an any color stops, along with their opacity values.</li>
          <li>On the next line, we specify where it should be placed. In this example, I've placed it on the bottom, but it could also be placed top, left, right, center, or a combination - such as top left to position it in the top left corner. A forward slash (/) is needed after this section.</li>
          <li>After the positioning, we specify how big it should be - widthｘheight. In the above example, I have it set to be 50% of the element's width wide, and 2px tall.</li>
          <li>On the same line as the dimensions, I've set it to no-repeat to make sure it stays as just a single line.</li>
          <li>On the last line, I specify <code>white</code> as a default value for the background. This does two things: (1) it fills the rest of the background area with white and (2) it serves as a fallback color for when this styling is not supported.</li>
        </ol>
        <p>Using this trick, you can simulate a border over just half of the height or width of a container. The real power is in your color choices - do you use it to make a gradient, or make a solid color line? What height and width do you set for it? Where do you position it?</p>
        <p><a href="https://css-tricks.com/gradient-borders-in-css/">CSS-Tricks</a></p>
        </article>
      </section>
      <section className="tdp-section main-section" id="Outline">
        <header>Outline</header>
        <article className="tdp-article">
        <p>Outline is not the same as border. Rather, an outline goes <i>outside</i> of the border, and they can be used together to create some really interesting effects. It is important to keep in mind that the outline is not considered in the element's dimensions, and may overlap with other elements.</p>
        <code className="block">
        <b>properties:</b><br/>
        &nbsp;outline<br/>
        &nbsp;outline-style<br/>
        &nbsp;outline-color<br/>
        &nbsp;outline-width<br/>
        &nbsp;outline-offset<br/>
        </code>
        <p>Most of the properties above work just like their <code>border</code> counterparts. First, there's a minor addition to the <code>outline-color</code> property - <code>invert</code>. Invert causes the color of the outline to be inverted against the background color, which allows it to always be visible. Lastly, <code>outline-offset</code> doesn't exist for borders at all. This property is used to set the distance between the container and its outline. The offset property is not included in the <code>outline</code> shorthand property.</p>
        <span className="outline-ex">Example</span>
        <p>The above Example span has the following properties:</p>
        <code className="block">
          display: inline-block;<br/>
          padding: 10px 30px;<br/>
          border: 1px solid black;<br/>
          outline: 3px dashed green;<br/>
          outline-offset: 5px;<br/>
        </code>
        <p><a href="https://www.w3schools.com/css/css_outline.asp">w3schools</a></p>
        </article>
      </section>
      <section className="tdp-section main-section" id="Table_Borders">
        <header>Table Borders</header>
        <article className="tdp-article">
        <p>By default, table borders are set to have gaps between each of the cells ( <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> ) and between the cells and the table's borders. Often, this is not the look desired for the page - even without the borders, the cell's background color will end at the border, and the table's background color, or lack of background color, will draw lines between each cell.</p>
        <p>This is where the table's <code>border-collapse</code> property comes in. By setting it to <code>collapse</code>, we can remove the space between each cell. In the following examples, the only difference between each of the borders tables and each of the background tables is the existence of the <code>border-collapse</code> property.</p>
        <table><tr><th colSpan={2}>Default</th></tr>
          <tr><td>1</td><td>2</td></tr>
          <tr><td>3</td><td>4</td></tr>
        </table>
        
        <table className="t-collapse"><tr><th colSpan={2}>Collapse</th></tr>
          <tr><td>1</td><td>2</td></tr>
          <tr><td>3</td><td>4</td></tr>
        </table>
        
        <table className="t-bg-ex"><tr><th colSpan={2}>Default</th></tr>
          <tr><td>1</td><td>2</td></tr>
          <tr><td>3</td><td>4</td></tr>
        </table>
        
        <table className="t-collapse t-bg-ex"><tr><th colSpan={2}>Collapse</th></tr>
          <tr><td>1</td><td>2</td></tr>
          <tr><td>3</td><td>4</td></tr>
        </table><br/>
        <code className="block">
          table {'{'}<br/>
          &nbsp;&nbsp;border-collapse: collapse;<br/>
          }
        </code>
        <p><a href="https://www.w3schools.com/cssref/pr_border-collapse.asp">w3schools</a></p>
        </article>
      </section>
      <section className="tdp-section main-section" id="Nth_Child">
        <header>Nth Child</header>
        <article className="tdp-article">
        <p>This is a very powerful tool for changing the styling on items such as tables and lists, but is not restricted to those.</p>
        <p>The Nth Child Selector automatically picks up the specific children and styles them as specified. Some examples are below.</p>
        <code className="block">
          :nth-child(<i>n</i>)<br/><br/>
          :nth-child(5)<br/>
          :nth-child(odd)<br/>
          :nth-child(even)<br/>
        </code>
        <p>A good use of this selector is to alternate the background colors of table rows or list items, which improves readability.</p>
        <p><a href="https://www.w3schools.com/cssref/sel_nth-child.asp">w3schools</a></p>
        </article>
      </section>
      <section className="tdp-section main-section" id="Combinators">
        <header>Combinators</header>
        <article className="tdp-article">
        <p>A <i>Combinator</i> describes the relationship between two selectors, and can be a very powerful tool. There are four different combinators:</p>
        <ul>
          <li><em>x</em>(space)<em>y</em>: Selects any <em>y</em> descendent of <em>x</em>.</li>
          <li><em>x</em> &gt; <em>y</em>: Selects any direct child <i>y</i> of <em>x</em>.</li>
          <li><em>x</em> + <em>y</em>: Selects any <em>y</em> that is an adjacent sibling to <em>x</em>.</li>
          <li><em>x</em> ~ <em>y</em>: Selects any <em>y</em> that is a sibling to <em>x</em>.</li>
        </ul>
        <p>It is important to remember that the styles will be applied to the second selector mentioned, represented above by <em>y</em>. As an example, the following code selects any <code>&lt;a&gt;</code> element that is a direct child of a <code>&lt;nav&gt;</code> nav element, and sets it to display as an inline block.</p>
        <code className="block">nav &gt; a {'{'}<br/>
        &nbsp;&nbsp;display: inline-block;<br/>
        }
        </code>
        <p><a href="https://www.w3schools.com/css/css_combinators.asp">w3schools</a></p>
        </article>
      </section>
      </main>
    </div>
  );
}