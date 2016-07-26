#!/bin/sh

# write a one-liner that will crash node!

node -e 'while (true) {}'

node -e 'for (;;) {}'

node -e 'do {} while (1)'
