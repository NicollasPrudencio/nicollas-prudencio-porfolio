const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col justify-center items-center w-12 h-12 cursor-pointer">
      {children}
    </div>
  );

export default Container;