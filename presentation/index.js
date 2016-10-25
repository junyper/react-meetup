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
  Code
} from "spectacle";

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
  holyGrail: require("../assets/holyGrail.jpg")
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
          </Slide>

          <Slide
            bgImage={images.styleguide.replace("/", "")} bgDarken={0.50}
            notes={`
              What's a style guide?
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
              What's a static style guide
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
              vs a "live" style guide
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Live Style Guide (or pattern library)
            </Text>

            <div className="browser">
              <Image src={images.canvas.replace("/", "")} margin="0" height="500px" />
            </div>
          </Slide>


          <Slide
            notes={`
              Live style guide description
            `}
          >
           <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              In a Live Style Guide
            </Text>
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Documentation lives with the source code in the same repository
            </Text>
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="scss"
                source={require("raw!../assets/buttons.scss")}
                margin="1em auto"
              />
            </div>
          </Slide>


          <Slide
            notes={`
              Is this the holy grail? Can we finally have a 'single source of truth' and
              stop manually updating documentation that is out of date as soon as we write it?
            `}
          >
            <Image src={images.holyGrail.replace("/", "")} margin="0" />
          </Slide>

          <Slide
            notes={`
              Nope.

              Our "live" style guide is still out of sync with the application code, and designers
              don't reference it (if they know it exists).

              Why?

              There is a steep learning curve. The old style guide lives in our monolithic code base which is difficult to set up and
              get running. It's not fair to ask designers to learn to update the documentation.

              Developers aren't familiar with the build and documentation...
              because our current front end build process and testing setup is cumbersome.

              Most full stack developers dislike working in the front end code, even when building out
              new React components and aren't likely to spend more time there than is absolutely
              necessary.
            `}
          >
            <Image src={images.panda.replace("/", "")} margin="0" />
          </Slide>

          <Slide
            notes={`
              A custom checkbox (toggle) in our sass style guide.

              There is a lot of markup to copy and paste.

              To make it accessible we need to add some JS behavior to it.

              The documentation doesn't
              necessarily reflect what's in the application code in terms of markup
              or JS for behavior.

              Most developers are reluctant to make changes to CSS because they aren't sure what they may
              break.

              This leads to lots of one-off solutions, duplication of effort and inconsitency in the UX.
            `}
          >
              <div className="browser">
                <Image src={images.toggle.replace("/", "")} margin="0" height="500px" />
              </div>
          </Slide>

          <Slide
            notes={`
              So how do we get designers and developers to share ownership of
              our living style guide?
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
          </Slide>

          <Slide
            notes={`
              A custom checkbox (toggle) in our react style guide.

              Here we're encapsulating style, markup and behavior for this component.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              A custom checkbox in Sass
            </Text>
            <div className="browser">
              <Image src={images.checkbox.replace("/", "")} margin="0" height="500px" />
            </div>
          </Slide>

          <Slide
            notes={`
              Documentation is generated from the source code + markdown in comment blocks.

              CSS, JS, HTML and documentation are bundled.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              <b>CSS, JS, HTML</b> &amp; documentation
            </Text>
            <Text textColor="tertiary" caps fit>
              in one place
            </Text>
            <div style={{height: "300px", overflow: "auto"}}>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/checkbox.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Code is in a separate repository and the documentation app is easy to install and
              and run locally.

              We've spent lots of time on scaffolding and tools to make it super easy to
              spin up a new component.

              (webpack dev server + hot reloading, eslint, stylelint)

              Designers can (at minimum) pull down code from a pull request and run it locally.
            `}
          >
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/checkbox.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Examples are generated from code blocks.
              Property documentation is generated from code + comment blocks using react-docgen.
            `}
          >
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/checkbox.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Code is in a separate repository and the documentation app is easy to install and
              and run locally.

              We've spent lots of time on scaffolding and tools to make it super easy to
              spin up a new component.

              Designers can (at minimum) pull down code from a pull request and run it locally.
            `}
          >
            <Image src={images.happy.replace("/", "")} margin="0" />
          </Slide>

          <Slide
            notes={`
              so what are some of the tools we're using?

              CSS Modules

              With CSS modules we can isolate components and make them more durable by
              limiting the scope of their CSS.

              Frameworks like Radium and Aphrodite do this by writing CSS rules in JS.

              Prevent the cascade with all: initial and postcss-initial
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              CSS Modules
            </Text>
            <Text textColor="tertiary" caps fit>
              (isolate component styles <b>without writing CSS in JS</b>)
            </Text>
            <div style={{height: "400px", overflow: "auto"}}>
              <CodePane
                lang="css"
                source={require("raw!../assets/button.css")}
                margin="1em auto"
              />
            </div>
          </Slide>

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

              similar to BEM format
              makes it easy to debug issues
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
              Prevent the cascade with all: initial and postcss-initial
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
            notes={`
              A11y benefits (Button and Link components)

              If it looks like a button it behaves like a button.
              If it looks like a link it behaves like a link.
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

              look at handleKeyDown method
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Adding (JS) behavior to components for <b>accessibility</b>
            </Text>
            <div style={{height: "400px", overflow: "auto"}}>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/button.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              (html...)

              A11y benefits (unit tests)

              We can use tools like axe-core and *eslint-plugin-jsx-a11y* to run unit tests to verify
              that the components are accessible and lint for common a11y issues
              (e.g. missing alt attributes on images).
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Unit tests for Accessibility using <b>axe-core</b>
            </Text>
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/checkbox.test.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              A11y benefits (color contrast)

              Notice the variables are defined in JS...
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Testing <b>color contrast</b> for a11y
            </Text>
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/button.test.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Run time themeing.

              Sass variables

              We need to pre-process all of the variations and custom brands as part of our build.
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              SASS variables in the monolith
            </Text>
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="scss"
                source={require("raw!../assets/variables.scss")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Run time themeing.

              Global/Brand JS variables
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Global brand variables defined in JS
            </Text>
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="js"
                source={require("raw!../assets/brand.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Run time themeing.

              Component/functional variables
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Component variables defined in JS
            </Text>
            <div style={{height: "500px", overflow: "auto"}}>
              <CodePane
                lang="js"
                source={require("raw!../assets/theme.js")}
                margin="1em auto"
              />
            </div>
          </Slide>

          <Slide
            notes={`
              Run time themeing.

              ApplyTheme component
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
              How does this work without writing inline styles?

              CSS custom properties
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
              margin="1em auto"
            />
          </Slide>

          <Slide
            notes={`
              CSS custom properties browser support
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              CSS custom properties
            </Text>
            <div className="browser">
              <Image src={images.variableSupport.replace("/", "")} margin="0" width="800px" />
            </div>
          </Slide>

          <Slide
            notes={`
              Polyfill for IE
            `}
          >
            <Text textSize="1rem" textColor="tertiary" fit caps lineHeight={1}>
              Polyfill for IE
            </Text>

          </Slide>

          <Slide
            notes={`
              Resources

              react-docgen,
              eslint,
              stylelint,
              postcss,
              axe-core,
              eslint-plugin-jsx-a11y,
              postcss-initial,
              css modules,
              webpack css-loader
            `}
          >
            <div>TODO</div>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
