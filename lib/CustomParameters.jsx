import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeHighlightHeader from './CodeHighlightHeader';

export default (Original, system) => (props) => {
  const data = system.appSelectors.apiSdk();
  const path = props.pathMethod ? props.pathMethod[0] : '';
  const method = props.pathMethod ? props.pathMethod[1] : '';
  let code = '';
  if (data && path !== '' && method !== '') {
    const service = data.services.find((service) => service.urlPrefix === 'user-services');
    code = service.paths[path][method];
  }

  return (
    <div className="custom-params">
      <CodeHighlightHeader title="test" />
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
        {code}
      </SyntaxHighlighter>
      <Original {...props} />
    </div>
  );
}
