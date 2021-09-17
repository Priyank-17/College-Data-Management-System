const express = require('express')
const path = require('path');
const multer = require('multer');
const File = require('../models/file');
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const projectTemplateCopy = require('../models/project');
const Achivement = require('../models/file_achive');


const app = express();

router.post('/project_co', (request,response)=>{

    const projects = new projectTemplateCopy({
        title : request.body.title,
        department:request.body.department,
        developer : request.body.developer,
        email : request.body.email,
        year : request.body.year,
        technology : request.body.technology,
        abstract: request.body.abstract
    })
    projects.save()
    .this(data=>{
        response.json(data)
    })
    .catch(data=>{
        response.json("error")
    })
})

router.get("/api", (req, res) => {
    projectTemplateCopy.find({}).then((data) => {
      
      res.json(data);
    });
  });

  router.get("/api3", (req, res) => {
    Achivement.find({}).then((data) => {
      
      res.json(data);
    });
  });

  router.get("/api1", (req, res) => {
    signUpTemplateCopy.find({}).then((data) => {
      
      res.json(data);
    });
  });
  router.get("/api2", (req, res) => {
    userSession.find({}).then((data) => {
      
      res.json(data);
    });
  });

  const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, './files');
      },
      filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
      }
    }),
    limits: {
      fileSize: 1000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
        return cb(
          new Error(
            'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
          )
        );
      }
      cb(undefined, true); // continue with upload
    }
  });

  router.post(
    '/upload',
    upload.single('file'),
    async (req, res) => {
      try {
        const { title, description } = req.body;
        const { path, mimetype } = req.file;
        const file = new File({
          title,
          description,
          file_path: path,
          file_mimetype: mimetype
        });
        await file.save();
        res.send('file uploaded successfully.');
      } catch (error) {
        res.status(400).send('Error while uploading file. Try again later.');
      }
    },
    (error, req, res, next) => {
      if (error) {
        res.status(500).send(error.message);
      }
    }
  );
  

  router.get('/getAllFiles', async (req, res) => {
    try {
      const files = await File.find({});
      const sortedByCreationDate = files.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      res.send(sortedByCreationDate);
    } catch (error) {
      res.status(400).send('Error while getting list of files. Try again later.');
    }
  });

  router.get('/download/:id', async (req, res) => {
    try {
      const file = await File.findById(req.params.id);
      res.set({
        'Content-Type': file.file_mimetype
      });
      res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
      res.status(400).send('Error while downloading file. Try again later.');
    }
  });
module.exports=router