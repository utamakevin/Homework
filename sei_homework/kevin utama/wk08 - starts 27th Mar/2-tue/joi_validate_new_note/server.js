// exerpt from server.js

const validateNewNote = require('./validate_new_note.js')

app.post('/api/notes', validateNewNote, (req, res) => {
    Note.create({ content: req.body.content }).then(() => 
      res.json({ message: 'new note added' })
    )
  })