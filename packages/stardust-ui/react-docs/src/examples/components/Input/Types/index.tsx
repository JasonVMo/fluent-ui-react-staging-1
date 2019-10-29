import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Default"
      description="A default Input."
      examplePath="components/Input/Types/InputExample"
    />
    <ComponentExample
      title="Inverted colors"
      description="An input can show an inverted background color."
      examplePath="components/Input/Types/InputInvertedExample"
    />
  </ExampleSection>
)

export default Types
