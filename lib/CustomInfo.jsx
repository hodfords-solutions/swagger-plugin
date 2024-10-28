import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeHighlightHeader from './CodeHighlightHeader';

export default (Original, system) => (props) => {
  const data = system.appSelectors.apiSdk();
  const apiDocument = data ? `${data.installDescription}\n${data.usage}` : '';

  return (
    <div className="custom-info">
      <CodeHighlightHeader title="The Document API description" />
      <SyntaxHighlighter
        language="javascript"
        style={agate}
        customStyle={{ margin: 0 }}
        showLineNumbers
        wrapLines
        wrapLongLines
        lineProps={lineNumber => ({
          style: { display: 'block', cursor: 'pointer' },
        })}
      >
        {apiDocument}
      </SyntaxHighlighter>
      <Original {...props} />
    </div>
  );
}
