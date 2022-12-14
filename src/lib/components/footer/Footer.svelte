<script>
    import Config from '../../../config.json';
</script>

<footer class="relative flex flex-col gap-y-6 items-center text-gray-600 text-md p-4 my-8">
    <h4 class="text-center">
        <span>{Config.organization.name}</span>
        <br>
        <span>{Config.organization.address.street}</span>
        <br>
        <span>{Config.organization.address.zip + " " + Config.organization.address.city + " / " + Config.organization.address.country}</span>
        <br>
        <span>{Config.organization.phone}</span>
        <br>
        <a href="mailto:{Config.organization.email}" class="underline underline-offset-2 text-sky-300">
            {Config.organization.email}
        </a>
    </h4>

    <div class="flex flex-col text-sm items-center">
        <span>Registry Court</span>
        <span>{Config.organization.reqistryCourt}</span>
        <div class="mt-1 flex flex-row gap-x-4 underline underline-offset-2 text-sky-300 text-md">
            <a href="/imprint">Imprint</a>
            <a href="/privacy">Privacy</a>
        </div>
    </div>
</footer>
