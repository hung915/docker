## Search for text
- `grep hello file1.txt`
- `grep -i hello file1.txt`
- `grep -i hello file*`
- search in a dir: `grep -i -r hello .`

## Find file or dir
- dir: `find -type d`
- file: \
`find -type f -name "f*"` \
`find -type f -iname "f*"`
`find / -type f -iname "*.py"`

## Chaining commands
`mkdir test; cd test; echo done` (step by step, if 1 command fail, other command continue) \
`mkdir test && cd test && echo done` (step by step, if 1 command fail, other command stop) \
`mkdir test || echo "exists"` (or) \
`ls /bin | less` (output of first command -> input of second command) \
`mkdir hello; \ cd hello; \ echo done` (break long command to multiple lines)


## Environment Variables
store in .bashrc file \
`echo DB_USER=hungdv >> .bashrc` \
`source .bashrc`

## Processes
a process is an instance of running program
kill PID ++++
abc