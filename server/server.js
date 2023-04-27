import express from "express";
import cors from "cors";
import ExecutiveRoutes from "./routes/executive.js";
import ContactRoutes from './routes/contact.js';
import BannerRoutes from './routes/banner.js';
import UserRoutes from './routes/user.js';
import ConferenceRoutes from './routes/conference.js';
import SpeakerRoutes from './routes/speaker.js';
import SponsorRoutes from './routes/sponsor.js';



const app = express();
app.use(express.json());

app.use(cors());

app.use(express.static('public')); 
app.use('/executive', express.static('executive'));
app.use('/banner', express.static('banner'));
app.use('/conference', express.static('conference'));
app.use('/speaker', express.static('speaker'));
app.use('/sponsor', express.static('sponsor'));

const PORT = 3000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    next();
  });
  
app.use(ExecutiveRoutes);
app.use(BannerRoutes);
app.use(ContactRoutes);
app.use(UserRoutes);
app.use(ConferenceRoutes);
app.use(SpeakerRoutes);
app.use(SponsorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
