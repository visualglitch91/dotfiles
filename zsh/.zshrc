export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="risto"

plugins=(
	asdf
	git
)

source $ZSH/oh-my-zsh.sh

# Only source the Cargo environment file if it exists
if [ -f "$HOME/.cargo/env" ]; then
	source "$HOME/.cargo/env"
fi

unsetopt PROMPT_SP

alias open=xdg-open

# APT shortcuts
alias apt-add="sudo apt install"
alias apt-del="sudo apt remove"

# Pacman shortcuts
alias pacadd='sudo pacman -Sy'
alias pacdel='sudo pacman -Rsu'

# Paru shortcuts
alias paruadd='paru -Sy'
alias parudel='paru -Rsu'

# Flatpak shortcuts
alias flatadd='flatpak install flathub'
alias flatdel='flatpak remove'

alias compose="docker compose"
alias nrun="npm run"
alias vim=nvim
alias vi=nvim
alias nano=nvim

alias gl='git pull'
alias gp='git push'
alias gpo='git push -u origin'
alias gs='git status'
alias gb='git branch'
alias gco='git checkout'
alias gcb='git checkout -b'
alias gd='git diff'
alias ga='git add'
alias gall='git add .'
alias gc='git commit'
alias gcm='git commit -m'
alias gcan='git commit --amend --no-edit'
alias git-confia="git add . && git commit --amend --no-edit && git push --force"
alias git-curr-branch='git rev-parse --abbrev-ref HEAD'
alias git-push='git push -u origin $(git-curr-branch)'

export PATH="$HOME/.npm-global/bin/:$PATH"
export PATH="$HOME/.visualglitch91/scripts/:$PATH"
export PATH="$HOME/Scripts/:$PATH"
export PATH="$HOME/Applications/:$PATH"

export VISUAL=vim
export EDITOR="$VISUAL"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"                   # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

sh $HOME/.visualglitch91/env
