# Insert form POST data using Express's ejs(Embedded JavaScript templating) in NodeJS

* First install express js template engine __ejs__ 
```node
npm i ejs;
```

### _Overview of EJS_

* __<%  %>__ 'Scriptlet' tag,Control flow.

* __<%=  %>__ Outputs the value(HTML Escaped).

* __<%- %>__ Outputs the unescaped value.

* ```  <%_  _%> ``` Whitespace-trim mode

* End with __-%>__ for New line.

* __<%#__ Comment tag
