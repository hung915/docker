## Image
- A cut-down OS
- Third-party libraries
- Application files
- Environment variables

## Container (like a VM)
- Provide an isolated env
- can be stopped & restarted
- is just a process

## Dockerfile
- COPY: file with space in name `COPY ["file name.txt", "."]`
- ADD: like COPY + support: http file, if add zip file -> automatically unzip \
Best practice: use COPY
- RUN: build time instruction
### shell form (/bin/sh, cmd, add a shell process)
- CMD: run time instruction \
`CMD npm start`
### Exec form
`CMD ["npm", "start"]` (always use exec form, no need to add a shell process) (easy to override cmd: docker run react-app sh) \
ENTRYPOINT (use when alway use this command when running container, no exception)


### clean CONTAINER, IMAGE
`docker rm -f $(docker container ls -a -q)` \
`docker image rm -f $(docker image ls -q)`