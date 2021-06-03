from flask.cli import AppGroup
from .readers import seed_readers, undo_readers
from .advisors import seed_advisors, undo_advisors
from .messages import seed_messages, undo_messages
from .reader_subscriptions import seed_subscriptions, undo_subscriptions

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_readers()
    seed_advisors()
    seed_subscriptions()
    seed_messages()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_readers()
    undo_advisors()
    undo_subscriptions()
    undo_messages()
    # Add other undo functions here
