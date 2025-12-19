interface ASButtonProps {
  text: string;
  shadow?: boolean;
}

const ASButton = ({ text }: ASButtonProps) => {
  return (
    <button className="w-[377px] shrink-0 p-4 border border-[#E6E7E8] rounded-[30px] font-semibold md:text-[22px] text-[20px] hover:bg-[#0BB453] hover:border-[#0BB453] hover:shadow-md/50 transition duration-300 cursor-pointer">
      {text}
    </button>
  );
};
export default ASButton;
