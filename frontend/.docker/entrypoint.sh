#!/bin/bash

#if [ ! -f ".env" ]; then
#    cp .env.example .env
#fi

npm install

PORT=3001 npm run dev
