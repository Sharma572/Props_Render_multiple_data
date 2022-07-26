function Props_file(Props) {
  console.log(Props.name);
  return (
    <>
      <h1>
        {Props.name} For {Props.reason}
      </h1>
    </>
  );
}
export default Props_file;
