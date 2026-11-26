const TextInput = (props) => {
  return (
    <div className="grid gap-2">
      <input
        {...props}
        className="px-4 py-2 border-none outline-none bg-green-600/20 font-semibold tracking-wide placeholder:font-normal rounded-md"
      />
      {props.error && (
        <p className="text-sm font-semibold dark:font-normal text-red-500 dark:text-red-400 tracking-wide pl-2">
          {props.errormessage}
        </p>
      )}
    </div>
  );
};

export default TextInput;
