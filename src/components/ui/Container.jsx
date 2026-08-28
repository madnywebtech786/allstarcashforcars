export function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 xl:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
