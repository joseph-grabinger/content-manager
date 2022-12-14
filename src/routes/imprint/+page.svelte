<script>
    import Config from '../../config.json';
</script>

<div>
    <h1 class="text-3xl font-semibold pb-4">Imprint</h1>
    <p>{Config.organization.name}</p>
    <p>{Config.organization.address.street}</p>
    <p>{Config.organization.address.zip + " " + Config.organization.address.city}</p>
    <p>{Config.organization.address.country}</p>
    <br/>
    <p>Tel.: +49 171 8867 539</p>
    <a href="mailto:{Config.organization.email}" class="underline underline-offset-2 text-sky-300">
        {Config.organization.email}
    </a>
    <br/>
    <p>Registry Court: {Config.organization.registryCourt}</p>
    <p>VAT-number: {Config.organization.vatId}</p>
    <br/>
    <p class="text-lg">Managing Director:</p>
    <p>{Config.organization.managingDirector}</p>
    <br/>
    <p class="text-lg leading-[1.2] mb-1">Responsible for the content according to § 55 para. 2 RStV:</p>
    <p>{Config.responsiblePerson}</p>
    <br/>
    <p class="text-lg">Dispute Resolution:</p>
    <p>The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
    <br/>
    <p class="text-lg">Liability Notice:</p>
    <p>We assume no liability for the accuracy, completeness and timeliness of the information provided. Liability claims against us, which refer to damages of material or immaterial nature caused by use or disuse of the information or the use of incorrect and incomplete information are excluded, unless {Config.organization.name} is not intentional or grossly negligent fault. All offers are subject to change and non-binding. {Config.organization.name} expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice or to cease publication temporarily or permanently.</p>
</div>