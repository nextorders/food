#!/bin/sh
curl -f http://localhost:3000/api/health || exit 1
