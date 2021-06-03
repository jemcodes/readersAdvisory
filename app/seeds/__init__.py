from flask.cli import AppGroup
from .readers import seed_readers, undo_readers
from .reader_preferences import seed_preferences, undo_preferences
from .reader_subscriptions import seed_subscriptions, undo_subscriptions
from .advisors import seed_advisors, undo_advisors
from .orders import seed_orders, undo_orders
from .order_products import seed_order_products, undo_order_products
from .products import seed_products, undo_products
from .messages import seed_messages, undo_messages

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_readers()
    seed_preferences()
    seed_subscriptions()
    seed_advisors()
    seed_products()
    seed_orders()
    seed_order_products()
    seed_messages()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_readers()
    undo_preferences()
    undo_subscriptions()
    undo_advisors()
    undo_products()
    undo_orders()
    undo_order_products()
    undo_messages()
    # Add other undo functions here
