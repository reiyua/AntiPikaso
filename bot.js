// import required modules
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const prefix = config.prefix;
const token = config.token;
const ownerID = config.ownerID;
