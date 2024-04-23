#!/usr/bin/sh

rsync --exclude '.env' --exclude '.env.local' -r --exclude 'node_modules' . blueship:/var/www/wellsail/
