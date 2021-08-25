import classes from "./FileButton.module.css"

const FileButton = (props: any) => {
  return (
    <div className={classes["upload-btn-wrapper"]}>
      <button className={classes.btn}>{props.children}</button>
      <input type="file" name="myfile" />
    </div>
  );
};

export default FileButton;
