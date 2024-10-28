export default function CodeHighlightHeader({
  title = '',
}) {
  return (
    <div className="code-highlight">
      <div style={{
        background: '#2B2B2B',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        display: 'flex',
        padding: '19px',
        color: '#B3B3B3',
        justifyContent: 'space-between'
      }}>
        <div className="code-highlight-title">{title}</div>
        <div className="code-highlight-actions">
          <div className="copy-code">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 13.3332L16.5332 14.6547C17.1777 15.2102 17.5 15.488 17.5 15.8332C17.5 16.1783 17.1777 16.4561 16.5332 17.0117L15 18.3332M11.6667 13.3332L10.1335 14.6547C9.48894 15.2102 9.16667 15.488 9.16667 15.8332C9.16667 16.1783 9.48894 16.4561 10.1335 17.0117L11.6667 18.3332M16.6667 10.8358L16.6667 6.51642C16.6667 5.10497 16.6667 4.39924 16.4434 3.8356C16.0844 2.92946 15.3252 2.21471 14.3627 1.87673C13.764 1.6665 13.0144 1.6665 11.5152 1.6665C8.89151 1.6665 7.57969 1.66651 6.53197 2.03441C4.84762 2.62586 3.51901 3.87667 2.89078 5.46241C2.5 6.4488 2.5 7.68381 2.5 10.1538L2.5 12.2757C2.5 14.8342 2.5 16.1135 3.20642 17.0019C3.40882 17.2565 3.64885 17.4825 3.91922 17.673C4.67922 18.2086 5.70849 18.3129 7.5 18.3332M2.5 9.99984C2.5 8.46571 3.74365 7.22206 5.27778 7.22206C5.8326 7.22206 6.4867 7.31928 7.02614 7.17473C7.50543 7.04631 7.8798 6.67193 8.00823 6.19264C8.15277 5.6532 8.05556 4.9991 8.05556 4.44428C8.05556 2.91016 9.29921 1.6665 10.8333 1.6665" stroke="#85EA2D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
