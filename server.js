import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import OpenAI from 'openai'

const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>{
    console.log("server is running....")
});




const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1", 
  apiKey: process.env.HF_TOKEN,               
});


app.get("/", (req, res) => {
  res.send("Backend is running....");
});


app.post('/api/generate',async(req,res)=>{
    try{
        const {prompt}=req.body;
        if(!prompt){
            return res.status.json({error:"prompt is required"});
        }
     
     const chatCompletion = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2-Instruct-0905:together", 
      messages: [
        {
          role: "user",
          content: `Write a detailed 1000-word blog about: ${prompt}`,
        },
      ],
      max_tokens: 1200, 
    });

    const blogText = chatCompletion.choices[0].message.content;
    res.json({ blog: blogText });


    }catch(err){
        console.log(err);
        res.status.json({error:"Failed to generate..."})
    }
})

