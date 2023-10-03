export default function Container({ children }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1440,
        height: '100%',
        paddingLeft: 160,
        paddingRight: 160,
      }}
    >
      {children}
    </div>
  );
}
