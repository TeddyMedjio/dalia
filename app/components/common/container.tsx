interface Props {
  children: React.ReactNode;
}

export default function container({ children }: Props) {
  return (
    <div className="mx-auto px-5 md:px-10 lg:px-0 max-w-[1360px]">
      {children}
    </div>
  );
}
