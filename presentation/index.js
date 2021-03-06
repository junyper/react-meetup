// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  Quote,
  Slide,
  Spectacle,
  Text,
  Code,
  Markdown,
  List,
  ListItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  styleguide: require("../assets/styleguide.png"),
  invision: require("../assets/invision_styleguide.png"),
  canvas: require("../assets/canvas.png"),
  toggle: require("../assets/toggle.png"),
  panda: require("../assets/panda.jpg"),
  checkbox: require("../assets/checkbox.png"),
  happy: require("../assets/happy.jpg"),
  button: require("../assets/button.png"),
  production: require("../assets/production.png"),
  development: require("../assets/development.png"),
  initial: require("../assets/initial.png"),
  applyTheme: require("../assets/applyTheme.png"),
  themed: require("../assets/themed.png"),
  zoomed: require("../assets/zoomed.png"),
  variableSupport: require("../assets/variableSupport.png"),
  holyGrail: require("../assets/holyGrail.jpg"),
  microservices: require("../assets/microservices.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#1bb7b6"
}, {
  primary: "Lato"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Style Guide Driven Development
            </Heading>
            <Heading size={1} fit caps>
              <i>
                <small style={{ paddingRight: "4px", textTransform: "lowercase", fontWeight: "normal" }}>with</small>
              </i>
              React and CSS Modules
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
            notes={`
              A little information about myself: I'm Lead UI Engineer on the UI dev team at Instructure.
              We're a cross-functional team made up of designers and engineers and we work closely with
              both Engineering and Product Design/UX.

              Our goal is to build tools and establish processes that make it easier for our designers and
              developers to more easily collaborate.
            `}
          >
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Jennifer Stern
            </Heading>
            <Heading size={1} fit caps>
              Lead UI Engineer @ <Link href="http://instructure.com" textColor="tertiary">Instructure</Link>
            </Heading>
            <Text lineHeight={1} textColor="tertiary">
              jstern@instructure.com
            </Text>
          </Slide>

          <Slide
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.50}
            notes={`
              What's a style guide?

              Where application development is concerned:

              It's all about better process and communication between designers and developers
              (and in a larger org between developers -- reducing duplication of efforts)

              To produce a more consistent UX and to be able to build out UI code more efficiently.
            `}
          >
            <Heading size={1} fit caps lineHeight={1}>
              What's a Style Guide?
            </Heading>

            <BlockQuote bgColor="rgba(0, 0, 0, 0.6)" margin="1em 0" padding="1em 1.5em">
              <Quote textColor="tertiary" textSize="1em" bold={false} lineHeight={1.5}>
                A style guide is a set of standards for the writing and design of documents,
                either for general use or for a specific publication, organization, or field....
                <Text margin="1em 0px 0px" textSize="1em" textColor="primary" caps bold lineHeight={1.2}>
                  A style guide establishes and enforces style to improve communication.
                </Text>
              </Quote>
              <Cite textColor="tertiary" textSize="0.5em">
                <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/Style_guide">
                  Wikipedia
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide
            notes={`
              Our designers maintain a static style guide in Sketch app and they share it
              with us in invision.

              This document doesn't really reflect the state of the current application UI
              and is time consuming to maintain.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Static Style Guide
            </Text>

            <div className="browser">
              <Image src={images.invision.replace("/", "")} margin="0" height="500px" />
            </div>
          </Slide>

          <Slide
            notes={`
              vs a "live" style guide...

              In recent years it's become pretty standard to build out a "living" style
              guide and there are a bunch of open source tools to help you generate documentation
              from your Sass or CSS style sheets.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Live Style Guide
            </Text>
            <Text textSize="3rem" textColor="tertiary">(or pattern library)</Text>
            <div className="browser">
              <Image src={images.canvas.replace("/", "")} margin="0" height="400px" />
            </div>
          </Slide>

          <Slide
            notes={`
              We've had one our living style guide for a while now and the documentation looks like this.

              When I first starting building out documentation like this, I was thinking...
            `}
          >
           <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              In a Live Style Guide
            </Text>
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Documentation lives with the source code in the same repository
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/buttons.scss")}
            ranges={[
              { loc: [0, 0], title: "buttons.scss" },
              { loc: [0, 21]}
            ]}
          />

          <Slide
            bgColor="black"
            transition={["slide"]}
            notes={`
              Is this the holy grail? Can we finally have a 'single source of truth' owned by
              both design and engineering and stop manually updating documentation that is usually
              out of date as soon as we write it?
            `}
          >
            <Image src={images.holyGrail.replace("/", "")} margin="0" />
          </Slide>

          <Slide
            bgColor="black"
            transition={["slide"]}
            notes={`
              Well... Nope.

              As it turns out, our "live" style guide is still out of sync with the application code,
              and most designers and developers don't reference it when they are working on new features
              (if they know it exists).

              Why?

              There is a steep learning curve to working in our monolithic code base, and since the old
              style guide lives there and is part of that build, it's difficult to set up and
              get running. So it's not really fair to ask designers to learn to update the documentation.

              In fact, most developers aren't familiar with the style guide part of the build
              because our current front end build process and testing setup is confusing and cumbersome.
            `}
          >
            <Image src={images.panda.replace("/", "")} margin="0" />
          </Slide>

          <Slide
            notes={`
              So let's take a look at a custom checkbox (toggle) in our sass style guide.

              Notice that there is a lot of markup to copy and paste.

              Also to make it accessible we need to add some JS behavior to it.

              So the documentation doesn't necessarily reflect what's in the application code
              in terms of html markup or JS for behavior.

              The scss code for this component lives in a common css file that is used across the
              application.

              Most developers are reluctant to make changes to CSS because they aren't sure what they may
              break and so they probably never see the files that have the documentation comment blocks.

              This leads to lots of one-off solutions and overrides, duplication of effort and
              inconsistency in the UX.
            `}
          >
              <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
                A custom checkbox in <b>Sass</b>
              </Text>
              <div className="browser">
                <Image src={images.toggle.replace("/", "")} margin="0" height="500px" />
              </div>
          </Slide>

          <Slide
            notes={`
              Let's compare that Toggle documentation with a custom checkbox (toggle)
              in our new React style guide.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              A custom checkbox in <b>React</b>
            </Text>
            <div className="browser">
              <Image src={images.checkbox.replace("/", "")} margin="0" height="500px" />
            </div>
          </Slide>

          <Slide
            notes={`
              Similar to our old style guide:
              the documentation is generated from the source code + markdown in comment blocks.

              Examples are generated from code blocks.
              Property documentation is generated from code + comment blocks using react-docgen.

              But in this case, CSS, JS, HTML and documentation are bundled and documented as one
              component.

              Notice that here we're encapsulating style, markup and behavior for the component.

              And we've replaced all of those lines of code with one.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              <b>CSS, JS, HTML</b> &amp; documentation
            </Text>
            <Text textColor="tertiary" caps fit>
              in one place
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/checkbox.js")}
            ranges={[
              { loc: [48, 270], title: "checkbox.js" },
              { loc: [21, 24]}
            ]}
          />

          <Slide
            transition={["spin", "slide"]}
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.50}
            notes={`
              So that's great, but how do we get designers and developers to share ownership of
              our living style guide v2.0 (and actually use it)?
            `}
          >
            <BlockQuote bgColor="rgba(0, 0, 0, 0.6)" margin="1em 0" padding="1em 1.5em">
              <Quote textColor="tertiary" textSize="1em" bold={false} lineHeight={1.2}>
                Make the right things easy and the wrong things hard.
              </Quote>
              <Cite textColor="tertiary" textSize="0.5em">
                <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/Style_guide">
                  Jonathan Snook
                </Link>
              </Cite>
            </BlockQuote>

            <Text textColor="tertiary" textSize="0.75em">And now I'll attempt to live code...</Text>
          </Slide>

          <Slide
            notes={`
              The component library code is in a separate repository and the documentation app
              is easy to install and and run locally.

              We've spent lots of time on scaffolding and tools to make it super easy to
              spin up a new component and write documentation and tests for it.

              (webpack dev server + hot reloading, eslint, stylelint)

              Now designers can (at minimum) pull down code from a pull request and run it locally.

              (We're working on convincing them that they can update it too :) )

              The easiest thing used to be to make a one-off solution for the feature, but we've
              made it a lot easier to contribute to the shared UI code instead.
            `}
          >
            <Image src={images.happy.replace("/", "")} margin="0" />
          </Slide>

          <Slide
            transition={["spin", "slide"]}
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.50}
            notes={`
              So now that we're bundling JS, CSS and HTML together into a single component, how can we be sure
              that it will render the same in the application as it does in our style guide?

              Can we take advantage of the fact that we're using JS to render these components?

              Should we consider writing our CSS in JS (as inline styles)?

              Lots of react component libraries are using frameworks like Radium and Aphrodite to write CSS in JS.
            `}
          >
            <BlockQuote bgColor="rgba(0, 0, 0, 0.6)" margin="1em 0" padding="1em 1.5em">
              <Quote textColor="tertiary" textSize="1em" bold={false} lineHeight={1.2}>
                CSS in JS?
                <Markdown>
                {`
1. Global Namespaces
2. Dependencies
3. Dead Code Elimination
4. Minification
5. Sharing Constants
6. Non-Deterministic Resolution
7. Isolation
                `}
                </Markdown>
              </Quote>
              <Cite textColor="tertiary" textSize="0.5em">
                <Link textColor="tertiary" href="">
                  Christopher "vjeux" Chedeau
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>
          <Slide
            notes={`
              CSS Modules solves 1-6 and half of 7

              With CSS modules we can isolate components and make them more durable by
              limiting the scope of their CSS.

              With CSS modules we can write our class names as if they were only scoped
              to the component we're working on without worrying that we'll accidentally
              break something somewhere else.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              CSS Modules
            </Text>
            <Text textColor="tertiary" caps fit>
              (isolate component styles <b>without writing CSS in JS</b>)
            </Text>
          </Slide>


          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/button.css")}
            ranges={[
              { loc: [0, 0], title: "button.css" },
              { loc: [274, 280], title: "local classes"}
            ]}
          />

          <Slide
            notes={`
              CSS Modules
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              CSS Modules
            </Text>
            <Text textColor="tertiary" caps fit>
              loading a CSS file in a JS component
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/button.js")}
            ranges={[
              { loc: [0, 0], title: "button.js" },
              { loc: [7, 9], title: "importing styles"},
              { loc: [161, 168], title: "rendering styles"},
              { loc: [184, 195] }
            ]}
          />

          <Slide
            notes={`
              Generated class names in production
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              <small>with</small> production config
            </Text>
            <div className="browser">
              <Image src={images.production.replace("/", "")} margin="0" height="550px" />
            </div>
          </Slide>

          <Slide
            notes={`
              Generated class names in development

              Note that it's pretty similar to the BEM class name format

              This makes it easy to debug issues in dev mode.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              <small>with</small> development config
            </Text>
            <div className="browser">
              <Image src={images.development.replace("/", "")} margin="0" height="550px" />
            </div>
          </Slide>

          <Slide
            notes={`
              The other half of #7

              Prevent the cascade with all: initial and postcss-initial

              We need to roll out these components bit by bit, so they need to work when older
              legacy CSS and various versions of Bootstrap CSS.

              We want to be pretty sure they'll work the same in the consuming app as they do in
              the documentation app.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Prevent the Cascade
            </Text>
            <Text textColor="tertiary" caps fit>
              with <Code textSize="1em" caps={false}>all: initial</Code> and postcss-initial
            </Text>
            <div className="browser">
              <Image src={images.initial.replace("/", "")} margin="0" width="100%" />
            </div>
          </Slide>

          <Slide
            transition={["spin", "slide"]}
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.50}
            notes={`
              As it turns out, bundling component JS, CSS and markup together
              makes writing accessibile UIs a whole lot easier.

              What does it mean for a UI to be accesible?

              It's about building your UI so that it works with assistive tech like screen readers,
              keyboards (for users who can't use a mouse) and for people who may be color blind or
              have partial vision.
            `}
          >
            <Heading size={1} fit caps>Accessibility</Heading>
          </Slide>

          <Slide
            notes={`
              A11y benefits (Button and Link components)

              In Canvas, we fix a lot of a11y bugs around buttons. Usually
              we've added onClick behavior to a div or we've styled a link to look
              like a button (or vice versa).

              Rule of thumb for keyboard a11y:

              If it looks like a button it should behave like a button.
              If it looks like a link it should behave like a link.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Accessible Buttons
            </Text>
            <div className="browser">
              <Image src={images.button.replace("/", "")} margin="0" height="500px" />
            </div>
          </Slide>

          <Slide
            notes={`
              (JS...)

              A11y benefits (Button and Link components)

              Take a look at the handleKeyDown method
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Adding (JS) behavior to components for <b>accessibility</b>
            </Text>
          </Slide>


          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/button.js")}
            ranges={[
              { loc: [0, 0], title: "button.js" },
              { loc: [113, 134]}
            ]}
          />

          <Slide
            notes={`
              (html...)

              A11y benefits (unit tests)

              We can use tools like axe-core and eslint-plugin-jsx-a11y to run unit tests to verify
              that the components are accessible and lint for common a11y issues
              (e.g. missing alt attributes on images).
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Unit tests for Accessibility using <b>axe-core</b>
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/checkbox.test.js")}
            ranges={[
              { loc: [0, 0], title: "checkbox.test.js" },
              { loc: [79, 87]}
            ]}
          />

          <Slide
            notes={`
              (color variables...)

              A11y benefits (color contrast)

              Notice the variables are defined in JS...
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Testing <b>color contrast</b> for a11y
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="jsx"
            code={require("raw!../assets/button.test.js")}
            ranges={[
              { loc: [0, 0], title: "theme.test.js" },
              { loc: [8, 14]}
            ]}
          />

          <Slide
            transition={["spin", "slide"]}
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.50}
            notes={`

            `}
          >
            <Heading size={1} caps>Themes</Heading>
          </Slide>

          <Slide
            notes={`
              Sass variables

              Notice the global (color) variables.

              Notice the functional (link) variables.

              What's the drawback here?

              We need to pre-process all of the variations and custom brands as part of our build.

              How can we avoid this?

              We can write our variables (not our CSS) in JS.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              SASS variables <b>in the monolith</b>
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="css"
            code={require("raw!../assets/variables.scss")}
            ranges={[
              { loc: [0, 0], title: "variables.scss" },
              { loc: [186, 188], title: "global variables"},
              { loc: [204, 208], title: "functional variables"}
            ]}
          />

          <Slide
            notes={`
              Global/Brand JS variables
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              <b>Global brand variables</b> defined in JS
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/brand.js")}
            ranges={[
              { loc: [0, 0], title: "brand.js" },
              { loc: [4, 9], title: "global color variables"}
            ]}
          />

          <Slide
            notes={`
              Component/functional variables
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              <b>Component variables</b> defined in JS
            </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/theme.js")}
            ranges={[
              { loc: [0, 0], title: "theme.js" },
              { loc: [7, 14], title: "component variables"}
            ]}
          />

          <Slide
            notes={`
              Now these variables are accessible withing our JS code too...

              and we can do run time themeing.

              Here's the ApplyTheme component.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Applying themes at run time
            </Text>
            <div className="browser">
              <Image src={images.applyTheme.replace("/", "")} margin="0" width="800px" />
            </div>
          </Slide>

          <Slide
            notes={`
              How does this work without writing inline styles with JS?

              ...CSS custom properties
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              CSS custom properties
            </Text>
            <div className="browser">
              <Image src={images.themed.replace("/", "")} margin="0" width="800px" />
            </div>
          </Slide>

          <Slide
            notes={`
              Setting custom properties with JS
            `}
          >
            <Code textColor="tertiary" fit lineHeight={1}>
              CSSStyleDeclaration.setProperty()
            </Code>
            <CodePane
              lang="js"
              source={require("raw!../assets/setProperty.js")}
              textSize="1em"
              margin="1em auto"
            />
          </Slide>

          <Slide
            notes={`
              CSS custom properties have pretty good browser support
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              CSS custom properties
            </Text>
            <Text textSize="2rem" textColor="tertiary" lineHeight={1}>
              (we wrote a polyfill for IE)
            </Text>
            <div className="browser">
              <Image src={images.variableSupport.replace("/", "")} margin="0" width="800px" />
            </div>
          </Slide>


          <Slide
            transition={["spin", "slide"]}
            bgImage={images.microservices.replace("/", "")} bgDarken={0.70}
            notes={`
              How's it going so far?
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Built to Scale
            </Text>
            <Text textSize="3rem" textColor="tertiary" bold>
              We're using our UI components in multiple applications as we start breaking up the monolith
              into microservices
            </Text>
            <Text textColor="tertiary">
              &
            </Text>
            <Text textSize="3rem" textColor="tertiary" bold>
              Our professional services team is using the library to build custom integrations with a seamless UX.
            </Text>
          </Slide>

          <Slide
            transition={["spin", "slide"]}
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.70}
            notes={`
              Questions
            `}
          >
            <Heading textColor="tertiary" fit caps lineHeight={1}>
              Questions?
            </Heading>

            <Text fit margin="2em 0" bold textColor="tertiary">
              https://github.com/instructure/instructure-ui
            </Text>

            <Text caps lineHeight={1} textColor="primary" bold margin="1em 0">
              We're Hiring!
            </Text>
            <Text textColor="tertiary">
              Contact Ariel: apao@instructure.com
            </Text>
          </Slide>

          <Slide
            notes={`
              Resources and Links
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Resources and Links
            </Text>
            <List textColor="tertiary">
              <ListItem>
                <Link textColor="tertiary" href="https://github.com/reactjs/react-docgen">react-docgen</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="http://eslint.org/">eslint</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://github.com/stylelint/stylelint">stylelint</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://github.com/dequelabs/axe-core">axe-core</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://github.com/maximkoretskiy/postcss-initial">postcss-initial</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://github.com/css-modules/css-modules">css modules</Link>
              </ListItem>
              <ListItem>
                <Link textColor="tertiary" href="https://github.com/webpack/css-loader">webpack css-loader</Link>
              </ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
