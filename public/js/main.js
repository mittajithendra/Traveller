const saveButton = document.getElementById('saveButton')
var editor = new EditorJS({
  holderID: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link'],
      config: {
        placeholder: 'Starts here ...'
      },
      shortcut: 'CMD+SHIFT+H'
    },

    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L'
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true
    },
    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    delimiter: Delimiter,
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C'
    },
    embed: Embed,
},
  data: {
    blocks: [
      {
        type: 'header',
      }

    ]
  },
  onReady: function () {
    saveButton.click() 
  },
  onChange: function () {
    console.log('something is changinggggggggg')
  }
})
/*
saveButton.addEventListener('click', function () {
  editor.save().then((savedData) => {

    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "descriptionUpload", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send('description='+JSON.stringify(savedData));

    var output = document.getElementById('output')
    var createNode = document.createElement('div')
    console.log(Object.keys(savedData.blocks).length)
    console.log(typeof savedData);
    for (i = 0;i < Object.keys(savedData.blocks).length;i++) {
      const type_of_text = savedData.blocks[i].type;
      if(type_of_text == 'header'){
        if(savedData.blocks[i].data.level== 1){
          const createChildNode = document.createElement('h1');
          createChildNode.innerHTML = savedData.blocks[i].data.text;
          createNode.appendChild(createChildNode);
        }
        else if(savedData.blocks[i].data.level== 2){
          const createChildNode = document.createElement('h2');
          createChildNode.innerHTML = savedData.blocks[i].data.text;
          createNode.appendChild(createChildNode);
        }
        else if(savedData.blocks[i].data.level== 3){
          const createChildNode = document.createElement('h3');
          createChildNode.innerHTML = savedData.blocks[i].data.text;
          createNode.appendChild(createChildNode);
        }
        else if(savedData.blocks[i].data.level== 4){
          const createChildNode = document.createElement('h4');
          createChildNode.innerHTML = savedData.blocks[i].data.text;
          createNode.appendChild(createChildNode);
        }
        else if(savedData.blocks[i].data.level== 5){
          const createChildNode = document.createElement('h5');
          createChildNode.innerHTML = savedData.blocks[i].data.text;
          createNode.appendChild(createChildNode);
        }
        else if(savedData.blocks[i].data.level== 6){
          const createChildNode = document.createElement('h6');
          createChildNode.innerHTML = savedData.blocks[i].data.text;
          createNode.appendChild(createChildNode);
        }
        
      }
      else if(type_of_text == 'checklist'){
        for(j=0;j<savedData.blocks[i].data.items.length;j++){
          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = savedData.blocks[i].data.items[j].text;
          checkbox.name = savedData.blocks[i].data.items[j].text;
          checkbox.value = savedData.blocks[i].data.items[j].text;
          checkbox.checked = savedData.blocks[i].data.items[j].checked;

          var label = document.createElement('label')
          label.htmlFor = savedData.blocks[i].data.items[j].text;
          label.appendChild(document.createTextNode(savedData.blocks[i].data.items[j].text));
          
          var br = document.createElement('br');
          createNode.appendChild(checkbox);
          createNode.appendChild(label);
          createNode.appendChild(br);
          
        }
          
      }

      else if(type_of_text == 'delimiter'){
        var delimiter = document.createElement('h3');
        delimiter.id = 'delimiter';
        delimiter.appendChild(document.createTextNode('* * *'));
        createNode.appendChild(delimiter); 
      }
      else if(type_of_text == 'list'){
        if(savedData.blocks[i].data.style == 'ordered'){
          var orderedlist = document.createElement('ol');
          for(j=0;j<savedData.blocks[i].data.items.length;j++){
              var list = document.createElement('li');
              list.innerHTML = savedData.blocks[i].data.items[j];
              orderedlist.appendChild(list);
          }
          createNode.appendChild(orderedlist);
        }
      }
      else if(type_of_text == 'paragraph'){
        var paragraph = document.createElement('p');
        paragraph.innerHTML = savedData.blocks[i].data.text;

        createNode.appendChild(paragraph);
      }
    }

    output.appendChild(createNode)
  })
})

*/