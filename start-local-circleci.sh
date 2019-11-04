CIRCLE_DOCKER_RUN_ARGUMENTS="-v /var/run/docker.sock:/var/run/docker.sock"  \
    circleci local execute \
    \ #--job build_and_test \
    --job release_build \
    --skip-checkout=true \
    --repo-url="/fake-remote" \
    --volume="/Users/james/code/ReactiveTraderCloud":"/fake-remote" \
    --env DOCKER_USER=weareadaptive \
    --env TMP_BUILD_NUM=23
