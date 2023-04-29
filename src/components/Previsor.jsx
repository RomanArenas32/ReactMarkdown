import "@fortawesome/fontawesome-free/css/all.min.css";

const contenido = `
Welcome to my React Markdown Previewer!
This is a sub-heading...
And here's some other cool stuff:
Heres some code, <div></div>, between 2 backticks.

// this is multi-line code:

<code> function anotherExample(firstLine, lastLine) {
  if (firstLine == null && lastLine == null) {
    return multiLineCode;
  }
}
 </code>
You can also make text bold... whoa!
Or italic.
Or... wait for it... both!
And feel free to go crazy crossing stuff out.

There's also links, and

Block Quotes!

And if you want to get really crazy, even tables:

Wild Header	Crazy Header	Another Header?
Your content can	be here, and it	can be here....
And here.	Okay.	I think we get it.
And of course there are lists.
Some are bulleted.
With different indentation levels.
That look like this.
And there are numbered lists too.
Use just 1s if you want!
And last but not least, let's not forget embedded images:
freeCodeCamp Logo
`;

export const Previsor = () => {
  return (
    <div className="previsor">
      <div className="toolbar">
        <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i><h5>Previsor</h5>
        <i className="fa fa-arrows-alt"></i>
      </div>

      <textarea name="" id="previsor" cols="30" rows="40">
        {contenido}
      </textarea>
    </div>
  );
};
