from os.path import dirname, join

__all__ = ['REDIS_SERVER_PATH', 'REDIS_CLI_PATH']

BIN = join(dirname(__file__), 'bin')
REDIS_SERVER_PATH = join(BIN, 'redis-server')
REDIS_CLI_PATH = join(BIN, 'redis-cli')
