from users.models import CustomUser, CampusAmbassadorProfile


def create_user(*args, **kwargs):
    """Create an user with optional kwargs."""
    create_user.i += 1

    if 'email' not in kwargs:
        kwargs['email'] = 'email%d@gmail.com' % create_user.i
    if 'first_name' not in kwargs:
        kwargs['first_name'] = 'first_name%d' % create_user.i
    if 'last_name' not in kwargs:
        kwargs['last_name'] = 'last_name%d' % create_user.i
    if 'contact_name' not in kwargs:
        kwargs['contact'] = '1111111111'
    # Create new object
    return CustomUser.objects.create(
        **kwargs
    )


def save_user(*args, **kwargs):
    """Saves or modifies an user with optional kwargs."""
    create_user.i += 1

    if 'email' not in kwargs:
        kwargs['email'] = 'email%d@gmail.com' % create_user.i
    if 'first_name' not in kwargs:
        kwargs['first_name'] = 'first_name%d' % create_user.i
    if 'last_name' not in kwargs:
        kwargs['last_name'] = 'last_name%d' % create_user.i
    if 'contact_name' not in kwargs:
        kwargs['contact'] = '1111111111'
    # Create new object
    user = CustomUser()
    if 'username' in kwargs:
        user.username = kwargs['username']
    user.email = kwargs['email']
    user.first_name = kwargs['first_name']
    user.last_name = kwargs['last_name']
    user.contact = kwargs['contact']
    user.save()
    return user


def create_campus_ambassador(*args, **kwargs):
    """Creates a campus ambassador with optional kwargs."""
    create_campus_ambassador.i += 1

    if 'user' not in kwargs:
        kwargs['user'] = create_user()
    if 'college' not in kwargs:
        kwargs['college'] = 'college%d' % create_campus_ambassador.i
    # Create new object
    return CampusAmbassadorProfile.objects.create(
        **kwargs
    )


create_user.i = 0
create_campus_ambassador.i = 0
